const pickWords = (words) => {
    const result = [];
    const shuffledList = words.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 9; i++) {
        result.push(shuffledList[i]);
    }
    return result;
};


export default pickWords; 