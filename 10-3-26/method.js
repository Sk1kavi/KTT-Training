let client={
    name: "kavi",
    sayHello(){
        alert(`hello , I'm ${this.name}`);
    },
    sing:function(){
        alert(`${this.name} is singing `);
    },
}

client.sayHello();
client.sing();

let admin={}
admin.name="admin";
admin.sayHello=client.sayHello;

admin.sayHello();
admin.sing=client.sing;
admin.sing();