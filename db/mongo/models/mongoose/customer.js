module.exports = (mongoose, Schema) => {

    const customerSchema = new Schema({
        id: {
            type: Schema.Types.ObjectId,
        },
        name: {
            type: String
        },
        phone: {
            type: Number
        },
        
    })

    return mongoose.model('Customer', customerSchema)
}