import styles from './Button.module.css';

const Button = ({
    url,
    text,
    target
}) => {

    return (
        <a 
            className={styles.button}
            href={url} 
            target={target}>
                {text}
        </a>
    )
}

export default Button;