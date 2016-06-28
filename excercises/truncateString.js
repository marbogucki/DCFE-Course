/**
 * Created by Marcin on 2016-06-28.
 */

function truncateString(text, num) {
    return text.substr(0, num) + '...';
}

truncateString('May the force be with you', 8);