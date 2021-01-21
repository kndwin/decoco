import { useForm } from 'react-hook-form'
import styles from './ContactForm.module.scss'

type Inputs = {
  name: string,
  email: string,
  number: number,
  messsage: string
}

export default function ContactForm () {

  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data) => {
    console.log(data)
  } 
  console.log(watch('example'))
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}
        className={styles.container}>
      <div className={styles.container}
      >
        <label htmlFor="Name"
          className={styles.label}>
          Name
        </label>
        <input name="name" 
          placeholder="John Smith" 
          className={styles.input}
          ref={register} 
        />
        <label htmlFor="Email"
          className={styles.label}>
          Email
        </label>
        <input 
          type="email"
          name="email" 
          placeholder="john.smith@gmail.com" 
          className={styles.input}
          ref={register} 
        />
        <label htmlFor="Phone Number"
          className={styles.label}>
          Phone Number
        </label>
        <input 
          name="number" 
          placeholder="+61412345678" 
          className={styles.input}
          ref={register} 
        />
        <label htmlFor="Message"
          className={styles.label}>
          Message
        </label>
        <textarea 
          name="message" 
          placeholder="Type your message here..." 
          className={`${styles.input} ${styles.textarea}`}
          ref={register} 
        />
      </div>
      <input 
        type="submit" 
        className={styles.button}
      />
    </form>
  )
}
