export const formatCompactNumber = number => {
    if (number < 1000) {
        return number;
    } else if (number >= 1000 && number < 1_000_000) {
        return (number / 1000).toFixed(1) + "K";
    } else if (number >= 1_000_000 && number < 1_000_000_000) {
        return (number / 1_000_000).toFixed(1) + "M";
    } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
        return (number / 1_000_000_000).toFixed(1) + "B";
    } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
        return (number / 1_000_000_000_000).toFixed(1) + "T";
    }
}

var nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];
export function generateRandomName() {
   return nameList[Math.floor( Math.random() * nameList.length )];
};

export const formateUploadTime = (timer) => {
    const currentTime = new Date(); 

    const uploadedDate = new Date(timer);
    const timeDifference = currentTime - uploadedDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const month = Math.floor(days/30);
    const year = Math.floor(month/12)

    let timeAgo;
    if(year > 0){
        timeAgo = year === 1 ? '1 year ago' : `${year} years ago`
    }
    else if(month > 0){
        timeAgo = month === 1 ? '1 month ago' : `${month} months ago`
    }
    else if (days > 0) {
    timeAgo = days === 1 ? '1 day ago' : `${days} days ago`;
    } else if (hours > 0) {
    timeAgo = hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    } else if (minutes > 0) {
    timeAgo = minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
    } else {
    timeAgo = seconds === 1 ? '1 second ago' : `${seconds} seconds ago`;
    }

    return timeAgo;
}