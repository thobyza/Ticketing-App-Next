import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

export type TicketType = {
  _id: string;
  title: string;
  description: string,
  category: string,
  priority: number,
  progress: number
  status: string,
  active: boolean,
}

const ticketSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    priority: { type: Number, required: true },
    progress: { type: Number },
    status: { type: String, required: true },
    active: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
)

const Ticket = mongoose.model<TicketType>("Ticket", ticketSchema);

export default Ticket