const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
	_id: Schema.Types.ObjectId,
	authorName:{ type: String, require: true },
	books:{ type: Array }
});

module.exports = mongoose.model('Authors', authorSchema);
