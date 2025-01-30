'use server'

export async function doTheThing() 
{
    console.log(process.env.customKey);
}

export async function sendMessage (formData: FormData) 
{
    const rawFormData = {
        message: formData.get('message')
    }
    console.log(rawFormData.message)
}

export async function getMovie(formData: FormData)
{
    const data = {
        movie: formData.get('movie')
    }
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + process.env.TMDB_token
        }
    };
    

    fetch('https://api.themoviedb.org/3/search/movie' + data.movie?.toString().replace(' ','%'),options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));

}
