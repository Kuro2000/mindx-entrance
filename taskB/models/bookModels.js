const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	_id: Schema.Types.ObjectId,
	bookName:{ type: String, require: true },
	authorName:{ type: String },
	archived:{type: Boolean}
});

module.exports = mongoose.model('Books', bookSchema);