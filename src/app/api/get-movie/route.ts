import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest)
{
    const { movie } = await request.json();
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + process.env.TMDB_token,
            Host: 'api.themoviedb.org'
        }
    };

    const response = await fetch(
        'https://api.themoviedb.org/3/search/movie?query=' + encodeURIComponent(movie?.toString() || ''),
        options
    );
    const json = await response.json();
    const titles = json.results
        ? json.results.slice(0,5).map((item: any) => item.original_title)
        : [];
    return NextResponse.json({ titles });
}