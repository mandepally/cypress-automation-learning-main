/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />
import BaiscAuth from '../../pages/0-auth'
import AddLiquidity from '../../pages/LiquidityPages/2-addLiquidity'
import PositionLiquidity from '../../pages/LiquidityPages/3-positionLiquidity';


const auth = new BaiscAuth();
const addliquidty = new AddLiquidity()
const position = new PositionLiquidity()


describe('Liquidity Position Details', () => { 

    it('1- Visit Url and bypass basic Auth', () => {
        // auth.login('https://unipilot-dev.surge.sh/positions')
        cy.visit('https://unipilot-dev.surge.sh/positions')
        cy.wait(1000 * 2)
    })

    it('2- Connect wallet', () => {
        addliquidty.connectWallet();
        cy.wait(1000*3)
    })

    it('3- View Liquidity Position List', () => {
        position.liquidityPosition('OZN/MET').should('exist')   // pairName = OZN/MET
    })

    it('4- View Liquidity Details', () => {
        position.viewLiquiditydetails('OZN/MET')     // pairName = OZN/MET
        cy.wait(1000*30)
    })

})