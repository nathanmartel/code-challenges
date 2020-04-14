module.exports = (oldDate, diff) => {
  // Have a helper function for every unit of time in Date that takes in and adds two of the same units (oldDate, diff date) and returns any remainder
  // Check end of diff string for time unit
  // Convert diff to Date format
  // Call series of helper functions, passing result to the next-larger unit
  // Increment that unit, passing the recarrying any remainder over the cutoff to the next largest unit
  // Return string formed by chain of function calls.

  // Alternate, maybe simpler approach: convert oldDate and diff into smallest unit (seconds), add, and divide by units working smallest to largest. But Would that integer be too large for JS?

  const convertDiffToMsec = (myDiff) => {
    const number = Number(myDiff.slice(0, myDiff.length - 1));
    const unit = myDiff.slice(myDiff.length - 1);

    let msec;
    switch (unit) {
      case 's': msec = number * 1000; break;
      case 'm': msec = number * 1000 * 60; break;
      case 'h': msec = number * 1000 * 60 * 60; break;
      case 'd': msec = number * 1000 * 60 * 60 * 24; break;
      case 'w': msec = number * 1000 * 60 * 60 * 24 * 7; break;
      case 'M': msec = Math.round(number * 1000 * 60 * 60 * 24 * 7 * (13/3)); break; // 52wk/year = 4 1/3 wk/mo = 13/3
      case 'y': msec = Math.round(number * 1000 * 60 * 60 * 24 * 7 * (13/3) * 12); break;
    }
    return msec;
  }

  const oldDateInMSec = Date.parse(oldDate);
  const diffInMsec = convertDiffToMsec(diff);

  console.log('diffInMsec = ', diffInMsec);
  const newDateInMsec = oldDateInMSec + diffInMsec;

  return new Date(newDateInMsec);

}


// ISO 8601 Extended format
// `YYYY-MM-DDTHH:mm:ss:sssZ`
//  01234567890123456789
// YYYY: 4-digit year
// MM: 2-digit month (where January is 01 and December is 12)
// DD: 2-digit date (0 to 31)
// -: Date delimiters
// T: Indicates the start of time
// HH: 24-digit hour (0 to 23)
// mm: Minutes (0 to 59)
// ss: Seconds (0 to 59)
// sss: Milliseconds (0 to 999)
// :: Time delimiters
// Z: If Z is present, date will be set to UTC. If Z is not present, it’ll be Local Time. (This only applies if time is provided.)