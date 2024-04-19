
import { useQuery } from "@tanstack/react-query";
import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";
import { getPets } from "../../services/pets/get.Pets";
import styles from './Pets.module.css'

import 'react-loading-skeleton/dist/skeleton.css'
import { Card } from "../../components/common/Card/Card";
import Skeleton from "react-loading-skeleton";
import { Pagination } from "../../components/common/Pagination";
import { useSearchParams } from "react-router-dom";

export function Pets() {

    const [searchParams, setSearchParams] = useSearchParams()

    const urlParams = {
        page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
    }

    

    function changePage(page: number) {
        setSearchParams((params) => {
            params.set('page', String(page))
            return params
        })
    }

    return (
        <Grid>
            <div className={styles.container}>
                <Header />
                {
                    isLoading && <Skeleton containerClassName={styles.skeleton} count={10}/>
                }
                <main className={styles.list}>
                    {
                        data?.items.map((pet) => (
                            <Card
                                key={pet.id}
                                href={`/pet/${pet.id}`}
                                text={pet.name}
                                thumb={pet.photo}
                            />
                        ))
                    }
                </main>
                {
                    data?.currentPage && (
                    <Pagination 
                        currentPage={data.currentPage}
                        totalPages={data.totalPages}
                        onPageChange={(number) => changePage(number)}
                     />
                )}
            </div>
        </Grid>
    )
}