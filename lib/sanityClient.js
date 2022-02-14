import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'leti6udz',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skdpW2ZbOIXMovun4rgF7U7GXaXzx5E5k57WH8La8ARiOOau0Zdr8BtijB3TGBRZOmtnZWCwdItYqXmVsVzG6Q3PyXU1yMWPXWSYtlsFgfKmMkctxz1SRGyspxks4tBMWiI2MdtsfDUZ7y78pgraHtGm9NZkkjgdADB6fF92R8v3PbiOzY7k',
  useCdn: false,
})