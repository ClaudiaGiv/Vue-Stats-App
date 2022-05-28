<template>
  <div id="app">
    <Suspense>
      <template #default>
        <div>
          <h2>Stats Guru</h2>
          <p>
            Create a simple SPA dashboard that displays the mean, median, mode and standard deviation of a given dataset.
            User should be able to load dataset by either uploading or fetching the JSON from remote URL.
            Dataset should be in json, having the following shape:
          </p>
          <code>{ data: [1, 2, 3, 4, 5] }</code>
          <h3>Instructions:</h3>
           <router-link to="/solution">Solution</router-link>
           <br/>
          <ol>
            <li>Feel free to add any libraries / files as required. </li>
            <li>Well written unit tests will result in extra credit.</li>
            <li>Overall, the final submission should look something like the following:<br/>
              <figure>
                <img alt="Stats Guru" width="500" src="./assets/Guru.png" />
                <figcaption>
                  <b>Note</b>: The above is a rough layout only. You can make it better in any way.
                </figcaption>
              </figure>
            </li>
          </ol>
          <p>
            <strong>References</strong> <br/>
            <a href="https://en.wikipedia.org/wiki/Arithmetic_mean">Mean</a><br/>
            <a href="https://en.wikipedia.org/wiki/Median">Median</a><br/>
            <a href="https://en.wikipedia.org/wiki/Mode_(statistics)">Mode</a><br/>
            <a href="https://en.wikipedia.org/wiki/Standard_deviation">Standard Deviation</a>
          </p>
        </div>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
figure {
  margin: 0;
}
</style>
