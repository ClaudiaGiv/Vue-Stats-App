class StatService {
  computeMean(dataSet: number[]): number {
    const average = dataSet.reduce((acc, x) => acc + x);
    return Number((average / dataSet.length).toFixed(2));
  }

  computeMedian(dataSet: number[]): number {
    const length = dataSet.length;
    const middle = Math.floor(length / 2);
    if (length % 2 !== 0) {
      return dataSet[middle];
    }
    return Number(((dataSet[middle] + dataSet[middle - 1]) / 2).toFixed(2));
  }

  computeStdDeviation(dataSet: number[]): number {
    let variance = 0;
    let dev = 0;
    const mean = this.computeMean(dataSet);
    for (let i = 0; i < dataSet.length; i++) {
      dev = dataSet[i] - mean;
      variance += Math.pow(dev, 2);
    }
    variance /= dataSet.length;
    return Number(Math.sqrt(variance).toFixed(2));
  }

  computeMode(dataSet: number[]): number {
    const dataObj = {};
    dataSet.forEach((x) => {
      if (!dataObj[x]) {
        dataObj[x] = 0;
      }
      dataObj[x]++;
    });

    let max = 0,
      dataKey;
    for (const key in dataObj) {
      const val = dataObj[key];
      if (val > max) {
        max = val;
        dataKey = key;
      }
    }
    return Number(dataKey);
  }
}

export default new StatService();
