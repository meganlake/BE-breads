//Require in our Mongoose
const mongoose = require('mongoose')

//Destructuring/Shorthand for Schema constructor
const { Schema } = mongoose

//Bread Schema
const breadSchema = new Schema ({
    //actualbreakdown of the bread document(1 bread item/data)
    name: { type: String, required: true },
    hasGluten: { type: Boolean },
    image: { type: String, default: 'http://placehold.it/500x500.png' },
    baker: {
        type: Schema.Types.ObjectId,
        ref: 'Baker',
    }
})

// helper methods 
breadSchema.methods.getBakedBy = function(){
    return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}

//Bread Model
const Bread = mongoose.model('Bread', breadSchema)
//Part 1: Bread -> The variable we are saving our model to.
//Part 2: mongoose -> Mongoose method that creates a model for us.
//Part 3: 'Bread' -> Arg 1 is the name of the collection we want to connect this model to.
//Part 4: breadSchema -> Arg 2 is the schema we want our model to use.

//Export Bread
module.exports = Bread