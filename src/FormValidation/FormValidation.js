import { useForm} from 'react-hook-form'

export default function FormValidation(props) {
    const { register,errors,handleSubmit } =useForm()
    const onSubmission = val => {
        console.log(val)
    }
    return (<div>
        <form onSubmit ={ handleSubmit(onSubmission) }>
            <div>
                <label>First Name:</label>
                <span><input type='text' name='fname' ref ={ register({ required: { value :true, message:'first name is a Required field'},
                maxLength:{ value:5,message:'max length will be exeded'},})}></input></span>
                {errors.fname && (
                    <span style={{color:'red'}}>{errors.fname.message}</span>
                )}
            </div>
            <div>
                <label>Last Name:</label>
                <span><input type='text' name='sname' ref ={ register({ required: { value :true, message:'Last  name  is a Required field'},
                maxLength:{ value:5,message:'max length will be exeded'},minLength:{ value:2,message:'minimum length'}})}></input></span>
                {errors.sname && (
                    <span style={{color:'red'}}>{errors.sname.message}</span>
                )}
            </div>
            <div>
                <label>Password:</label>
                <span><input type='password' name='pword' ref ={ register({ required: { value :true, message:'password is a  Required field'},
                maxLength:{ value:5,message:'max length will be exeded'},})}></input></span>
                {errors.pword && (
                    <span style={{color:'red'}}>{errors.pword.message}</span>
                )}
            </div>
            <div>
                <label>Email</label>
                <span><input type='text' name='email' ref ={ register({ required: { value :true, message:'Email is Required fild'},
                maxLength:{ value:20,message:'max length will be exeded'},pattern:{value: /^[\w\.]+@$/,message:'Email is not valid'}})}></input></span>
                {errors.email && (
                    <span style={{color:'red'}}>{errors.email.message}</span>
                )}
            </div>
            <div>
                <button type='submit'>submit</button>
            </div>
        </form>
    </div>)
}