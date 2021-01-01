import utils from '../../styles/utils.module.scss'
import styles from './TradingHours.module.scss'

export default function TradingHours () {
  return (
    <div className={styles.container}>
      <h2 className={utils.titleH2}>Trading Hours</h2>
      <table className={`${styles.table}`}>
        <tr>
          <td>Monday</td>
          <td>9:00AM - 5:00PM</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>9:00AM - 5:00PM</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>9:00AM - 5:00PM</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>9:00AM - 5:00PM</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>9:00AM - 5:00PM</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>9:00AM - 5:00PM</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>9:00AM - 5:00PM</td>
        </tr>
      </table>
    </div>
  )
}
