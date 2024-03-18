import React from 'react';
import styles from '../styles/BetterBookkeeping.module.css'
import Head from 'next/head';


interface BetterBookkeepingProp {
    id: string

}
const BetterBookkeeping: React.FC<BetterBookkeepingProp> = ({ id }) => {
    const bannerMessage = "Better \n Bookkeeping \n & Tax"
    const bannerdesc = `
                Introducing Balance Beam, the groundbreaking platform transforming small 
                business financial management. With our seamless fusion of advanced software 
                and live US-based expert bookkeepers and accountants, you’ll save valuable time 
                and resources while optimizing deductions to reduce tax liabilities.
`;
    return (
        <div className={styles.bookkeepingcontainer} id={id}>

            <div
                className={styles.bookkeepingHeader}
                dangerouslySetInnerHTML={{ __html: bannerMessagetypingtext }}
            />

            <p className={styles.bookkeepingText}
                dangerouslySetInnerHTML={{ __html: bannerdescTypingtext }} />
            {/* Introducing Balance Beam, the groundbreaking platform transforming small<br />
                business financial management. With our seamless fusion of advanced software <br />
                and live US-based expert bookkeepers and accountants, you’ll save valuable time <br />
                and resources while optimizing deductions to reduce tax liabilities.<br /> */}





            <div className={styles.bottomdiv}>
                <DemoButtonComponent />
                <div className={styles.imagecontainer}>
                    <img src="images/logo/book-demo-star-icon.svg" alt="Transparent Image" />
                    <p className={styles.bookedItemext}> 45 businesses booked this week</p>
                </div>
                <div className={styles.buttonGroup}>

                    <div className={styles.watchdemodiv}>
                        <button className={styles.watchdemo}>Watch demo</button>
                    </div>
                    <div className={styles.watchdemodiv}>
                        <button className={styles.watchdemo}>Take a tour</button>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default BetterBookkeeping; 