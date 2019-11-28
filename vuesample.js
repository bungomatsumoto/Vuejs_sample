var vm = new Vue({
  el: '#vueapp',
  data: {
    students: [
      { id: 1, name: '野呂浩良', course: '機械学習コース', courseperiod: '2019年01月期'},
      { id: 2, name: '富永修司', course: 'Webエンジニアコース', courseperiod: '20017年11月期'},
      { id: 3, name: '斉藤一起', course: 'Webエンジニアコース', courseperiod: '20017年11月期'}
    ],
    nextStudentId: 4
  },
  methods: {
    addStudent: function (){
      this.students.push({
        id: this.nextStudentId++,
        name: this.name,
        course: this.course,
        courseperiod: this.courseperiod
      })
      this.name = '',
      this.course = '',
      this.courseperiod = ''
    }
  }
})
