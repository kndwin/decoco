import { useForm } from 'react-hook-form'
import styles from './ContactForm.module.scss'
import emailjs from 'emailjs-com'

type Inputs = {
  name: string,
  email: string,
  number: number,
  messsage: string
}

export default function ContactForm ({
  isCancel,
}: {
  isCancel: () => void
}) {

  const { register, handleSubmit, watch, errors } = useForm<Inputs>();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_12sy6gf', 'template_2n4reca', e.target, 'user_n1rYzzL6qqrffqtOAgZ78')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }
  
  return (
    <form onSubmit={handleSubmit(sendEmail)}
        className={styles.formContainer}>
      <div className={styles.inputsContainer}
      >
        <label htmlFor="Name"
          className={styles.label}>
          Name
        </label>
        <input name="user_name" 
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
          name="user_email" 
          placeholder="john.smith@gmail.com" 
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
      <div className={styles.buttonRow}>
        <input 
          type="submit" 
          value="Submit"
          className={styles.button}
          id={styles.submit}
        >
        </input>
        <button
          className={styles.button}
          onClick={isCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
