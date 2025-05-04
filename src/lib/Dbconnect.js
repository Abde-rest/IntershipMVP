const mongoose = require("mongoose");

export default async function dbConnect() {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Your  are Redy Connect to dataBaee");
      return mongoose.connection.asPromise();
    } else {
      await mongoose.connect(process.env.MONGODB_URI, {
        // useUnifiedTopology: true,
        // serverSelectionTimeoutMS: 30000, // مهلة تصل إلى 30 ثانية
      });
    }
    console.log("Connect database");
  } catch (error) {
    console.log("Not Connect database Ther is problem ");
    console.log(error);
    return error;
  }

  // const Cat = mongoose.model('Cat', { name: String });

  // const kitty = new Cat({ name: 'Zildjian' });
  // kitty.save().then(() => console.log('meow'));
}
