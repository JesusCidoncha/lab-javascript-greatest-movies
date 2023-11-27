// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const allDirectors = moviesArray.map(movie => movie.director)

    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    if (moviesArray.length === 0) {

        return 0
    }

    const moviesSpilberg = moviesArray.filter(
        (currentElement) => {
            if (currentElement.director === "Steven Spielberg") {
                return true;
            }
            return 0;
        }
    );

    const dramasSpilberg = moviesSpilberg.filter(

        (currentElement) => {

            if (currentElement.genre.includes("Drama")) {

                return true;
            }
            return false

        }


    );
    return dramasSpilberg.length;


}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    /* Without using reduce
        let totalScore = 0;
    
        moviesArray.forEach(currentMovie => {
    
            if (currentMovie.score) {
    
                totalScore += currentMovie.score;
            }
        });
    */
    const totalScore = moviesArray.reduce((total, currentMovie) => {
        if (currentMovie.score !== undefined) {
            return total + currentMovie.score;
        }
        return total;
    }, 0);

    if (moviesArray.length > 0) {
        let averageScore = totalScore / moviesArray.length;
        let roundedScore = parseFloat(averageScore.toFixed(2));
        return roundedScore;
    } else {
        return 0;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray
        .filter((currentMovie) => {
            if (currentMovie.genre.includes("Drama")) {
                return true;
            }
            return false;
        })
    const totalDramaScore = dramaMovies.reduce((totalDrama, currentDrama) => {
        if (currentDrama.score !== undefined) {
            return totalDrama + currentDrama.score;
        }
        return totalDrama;
    }, 0);

    if (dramaMovies.length > 0) {
        let averageDramaScore = totalDramaScore / dramaMovies.length;
        let roundedDramaScore = parseFloat(averageDramaScore.toFixed(2));
        return roundedDramaScore;
    } else {
        return 0;
    }
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesArrayCopy = [...moviesArray]
    const sortedYears = moviesArrayCopy.toSorted((a, b) => {
        const yearA = a.year
        const yearB = b.year
        if (yearA === yearB) {
            const titleA = a.title.toUpperCase();
            const titleB = b.title.toUpperCase();
            return titleA.localeCompare(titleB);
        }
        return yearA - yearB;

    });
    return sortedYears

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const moviesArrayCopy = [...moviesArray]
    
    //can also use toSort() with the original array
    const sortedTitles = moviesArrayCopy
    
    .sort((a, b) => {
        
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        return titleA.localeCompare(titleB);   
        

    })
    .slice(0,20)
    .map(movie => movie.title)
    return sortedTitles


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const timeConversion = (duration) => {
      let minutes = 0;
      const splitDuration = duration.split(' ');
  
      splitDuration.forEach(durationPart => {
        const conversionMin = parseFloat(durationPart);
  
        if (!isNaN(conversionMin)) {
          if (durationPart.includes('h')) {
            minutes += conversionMin * 60;
          } else if (durationPart.includes('min')) {
            minutes += conversionMin;
          }
        }
      });
  
      return minutes;
    }
  
    const updatedMovies = moviesArray.map(movie => ({
      ...movie,
      duration: timeConversion(movie.duration),
    }));
  
    return updatedMovies;
  }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
      return null;
    }
  
    const yearStats = moviesArray.reduce((acc, movie) => {
      const year = movie.year;
      const score = movie.score;
  
      if (year && score !== undefined) {
        acc[year] = acc[year] || { totalScore: 0, movieCount: 0, year: year };
        acc[year].totalScore += score;
        acc[year].movieCount++;
      }
  
      return acc;
    }, {});
  
    let bestYear = '';
    let bestAverageScore = -1;
  
    for (const year in yearStats) {
      const { totalScore, movieCount, year: currentYear } = yearStats[year];
      const averageScore = totalScore / movieCount;
  
      if (averageScore > bestAverageScore || (averageScore === bestAverageScore && currentYear < bestYear)) {
        bestYear = currentYear;
        bestAverageScore = averageScore;
      }
    }
  
    return `The best year was ${bestYear} with an average score of ${bestAverageScore}`;
  }
  
    
