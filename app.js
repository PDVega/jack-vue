new Vue ({
  el: '#app',
  data: {
    message: 'Hello Jack!',
    btnvalue: 'Check Button!',
    newStudent:{
        id: '',
        name: '',
        phase2: false
    },
    students: [
      {id: 1, name: 'Zaenal', phase2: false},
      {id: 2, name: 'Arifin', phase2: false},
      {id: 3, name: 'Ahmad Nasikin', phase2: true}
    ]
  },
  methods: {
    addStudent (){
      // let newStudent = {
      //   id: this.newStudent.id,
      //   name: this.newStudent.name,
      //   phase2: this.newStudent.phase2
      // }
      let newStudent = { ...this.newStudent}
      this.students.push(newStudent)
    }
    //lifecycle, panggil sebuah methods mounted atau created
    // mounted(){
    //   
    // }
    //computed return value baru hasil dari state data yang diatas
  },
  computed: {
    phase2Students(){
      return this.students.filter(function (student){
        return student.phase2 //kalau false ga akan direturn
      })
    }
  }
})
