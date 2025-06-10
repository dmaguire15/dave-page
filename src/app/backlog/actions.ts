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

