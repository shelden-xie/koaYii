class Create {
  constructor(){
    this.elBtn = $('#js-btn');
  }
  fn(){
    this.elBtn.click(function(){
      alert(1);
    })
  }
}

export default Create;