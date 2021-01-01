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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <input name="name" 
          placeholder="Your Name" 
          className={styles.input}
          ref={register} 
        />
        <input 
          type="email"
          name="email" 
          placeholder="Your Email" 
          className={styles.input}
          ref={register} 
        />
        <input 
          name="number" 
          placeholder="Your Phone number" 
          className={styles.input}
          ref={register} 
        />
        <textarea 
          name="message" 
          placeholder="Message" 
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
