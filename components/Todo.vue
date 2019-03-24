<template>
	<div>	
		<v-container>
      		<v-layout align-center justify-center row wrap>
      			<h2>TODOアプリ</h2>
      		</v-layout>
		    <br>
      		<v-layout row wrap>
		        <v-flex xs12 sm6>
		          <v-text-field
		            label="タスク名"
		            single-line
		            v-model="newTodoName"
		          ></v-text-field>
		        </v-flex>
		        <v-btn large @click="addTodo">追加</v-btn>
		    </v-layout>
		    <br><br>

		    <v-layout row wrap>
		        <v-flex xs12 md6 justify-center align-self-center>
		    	 	<h4>全て表示</h4>
		    	 </v-flex>
		    	 <v-flex xs12 md6>
		    	 	<v-checkbox
                	v-model="showAllTask"
              		></v-checkbox>
		    	 </v-flex>
		    </v-layout>
		    <v-layout>
		    	 <v-flex xs12 md6>
		    	 	<b><h3>タスク名</h3></b>
		    	 </v-flex>
		    	 <v-flex xs12 md6>
		    	 	<b><h3>完了状態</h3></b>
		    	 </v-flex>
		    </v-layout>
		    <hr>
		    <v-layout row wrap v-for="(todo, key) in filterTodos" :key="key">
		    	 <v-flex xs12 md6 justify-center align-self-center>
		    	 	<h4>{{ todo.name }}</h4>
		    	 </v-flex>
		    	 <v-flex xs12 md6>
		    	 	<v-checkbox
                	v-model="todo.isComplete"
                	@change="updateIsCompleteTodo(todo, key)"
              		></v-checkbox>
		    	 </v-flex>
		    </v-layout>
		</v-container>
	</div>
</template>

<script>
import firebase from '~/plugins/firebase.js'
export default {
	data () {
		return {
			database: null,
			todosRef: null,
			newTodoName: "",
			showAllTask: false, // all | done 
			todos: []
		}
	},
	created (){
		this.database = firebase.database()
		var uid = process.env.UID
		this.todosRef = this.database.ref("todos/" + uid)
		
		var thisCompenent = this
		this.todosRef.on('value', (snapshot) => {
			console.log(snapshot.val())
			thisCompenent.todos = snapshot.val()
		})
	},
	computed: {
		filterTodos: function() {
			if (this.showAllTask) return this.todos
			var filteredTodos = {}
			for (var key in this.todos) {
				let todo = this.todos[key]
				if (todo.isComplete === false) filteredTodos[key] = todo
			}
			return filteredTodos
		}
	},
	methods: {
		addTodo () {
		if (this.newTodoName === "") return
		var newTodo = {
			name: this.newTodoName,
			isComplete: false
		}
		this.todosRef.push(newTodo)
		},
		updateIsCompleteTodo (todo, key) {
			//console.log(key)
			//console.log(todo)
			var updateData = {}
			updateData[key] = todo
			console.log(updateData)
			this.todosRef.update(updateData)
		}	
	}
}
</script>