import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer sQEDUDpxf9_5DzCZSc_7GUz0wjI6PT1v0fMgsJUKbWBZXgAYoClkdyZFxZOINowpB05qAEih1HJA97Sb128i6OKeUItpkeguW6GH7aAJvWWdVcAWNm3x0J9z74VMYHYx'
    }
});



