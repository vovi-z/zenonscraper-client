import styles from './SubtextMedium.module.scss'

export default function TextMedium(props) {
    return (
        <p className={styles.textMedium}>{ props.children }</p>
    )
}