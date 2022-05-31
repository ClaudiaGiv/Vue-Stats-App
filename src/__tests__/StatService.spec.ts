import StatService from "../services/StatService";

describe("StatService", () => {
  test("compute mean", () => {
    const dataSet = [1, 2, 3, 4];
    const mean = StatService.computeMean(dataSet);
    expect(mean).toBe(2.5);
  }),
    test("compute mode", () => {
      const dataSet = [1, 2, 3, 4, 4];
      const mean = StatService.computeMode(dataSet);
      expect(mean).toBe(4);
    }),
    test("compute std deviation", () => {
      const dataSet = [1, 2, 3, 4];
      const mean = StatService.computeStdDeviation(dataSet);
      expect(mean).toBe(1.12);
    }),
    test("compute median", () => {
      const dataSet = [1, 2, 3, 4];
      const mean = StatService.computeMedian(dataSet);
      expect(mean).toBe(2.5);
    });
});
