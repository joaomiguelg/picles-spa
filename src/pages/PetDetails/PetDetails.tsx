import { useParams } from "react-router-dom";
import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";
import styles from './PetDetails.module.css'
import { useQuery } from "@tanstack/react-query";
import { getPetById } from "../../services/pets/getPetsById";
import { ImageBase64 } from "../../components/common/ImageBase64/ImageBase64";

export function PetDetails() {
    const {id} = useParams()

    const {data} = useQuery({queryKey: ['get-pet-by-id', id], queryFn: async () => {
        return await getPetById(id ?? '')
    },
})

    return (

        <Grid>
            <div className={styles.container}>
                <Header showReturn={true} />
                <main className={styles.content}>
                    <ImageBase64 src={data?.photo} className={styles.picture} />
                    <h1>{data?.name}</h1>
                    <span>Sobre o pet:</span>
                    <p>{data?.bio}</p>
                </main>
            </div>

        </Grid>

    )
}