const user = {
  id: 1234,
  admin: false,
  becomeAdmin: function() {
    this.admin = true;
  }
}

// в случе написаном сверху ts понимает, что мы this равно объекту в котором находиться эта функция
// в каких то случаях этого может быть достаточно, но где то нам нужно прописывать тип this самостоятельно

interface User {
  id: number,
  name: string,
  isAdmin: boolean
}

interface DB {
  filterUsers: (filter: (this: User) => boolean) => User[];
}

declare function getDb():DB;

const db = getDb();

db.filterUsers(function(this: User) { // не забываем что this есть только у function
  return this.isAdmin
})

// в примере написаном выше мы явно указываем this 