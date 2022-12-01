import { model, Schema } from 'mongoose';
const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      select: false
    }
  },
  {
    timestamps: true,
    methods: {}
  }
);

// userSchema.pre('save', async function (next: NextFunction) {
//   if (this.isModified('password')) {
//     this.password = await bcrypt.hash(this.password, 10);
//   }
// });

const User = model<typeof userSchema>('user', userSchema);

export default User;
