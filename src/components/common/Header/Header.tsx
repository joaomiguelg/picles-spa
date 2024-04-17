import { Link } from 'react-router-dom'
import { Button, ButtonVariant } from '../Button'
import styles from './Header.module.css'

interface IHeader {
    showReturn?: boolean
}

export function Header({ showReturn }: IHeader) {
    return (

        <header className={styles.header}>
            {showReturn && (
                <Link to='/pets'>
                    <Button variant={ButtonVariant.Text}>Tenho um Abrigo</Button>
                </Link>
            )}

            <Link to='/admin'>
                <Button variant={ButtonVariant.Outlined}>Voltar</Button>
            </Link>
            
        </header>



    )







}