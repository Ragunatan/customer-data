<script>
        function storedata(e){
            event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;
            const phone = event.target.phone.value;
            
            class Data{
              constructor(name,email,phone){
                this.name = name;
                this.email = email;
                this.phone = phone
              }
            }
            var user1 = new Data(name,email,phone)
            var str_user1 = JSON.stringify(user1)
            localStorage.setItem('user1',str_user1)
            console.log(user1)
          }
    </script>