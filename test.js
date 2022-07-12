const axios = require('axios')
const { expect } = require('chai')

async function getChars(){
    let response = axios.get("https://api.jikan.moe/v4/characters")
    let list = await response
    return list.data.data
}

describe('Anime list characters', function () {
    it('Response is not empty', function () {
        return getChars().then(function (data) {
            charList = data
            expect(charList).to.not.have.length(0)
        })
    })

    it('Character is Spike Spiegel', function () {
        return getChars().then(function (data) {
            charList = data
            expect(charList[0].name).to.equal("Spike Spiegel")
        })
    })
})