const { Book, sequelize }= require('./book.js');

// Even tho our model is an ES6 compatible class 
// we should not use new to create an instance
// instead we should call the build method
async function main(){

    // Opret bog
    /*
    await sequelize.sync({ alter: true });

    const newBook = Book.build({ title: "Rainbow Fish", authorName:"Marcus Pfister" });
    console.log(newBook instanceof Book); // true
    console.log(newBook.title); // "Jane"
	
    await newBook.save();
    */

	//Find all
    /*
    const books = await Book.findAll({
        // The following ensure we get plain data
        // Instead of an array of instances
        raw: true,
    });
    console.log(books); */
    //Delete and show result
    /*
    const delete_result = await Book.destroy({
        here: {
          id:'2beb0913-7c65-425a-886b-1fdff7ae6945',
      }
  });
  console.log(delete_result);
  const books = await Book.findAll({
      raw:true,
  });
  console.log(books);
  */
    //Update and show result
    /*
  await Book.update(
    // This object represent the fields
     // We are trying to update
   { authorName: "Marcus Pfister New name" }, 
   {
         // This where clause specify 
         // Which element we are updating
       where: {
           id: '9dcff7bb-0bfc-43d1-abc2-8701e3b80cd7',
       }
   }
);

const books = await Book.findAll({
   raw:true,
});
console.log(books);
*/









}

main();