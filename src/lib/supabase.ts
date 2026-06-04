import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import Constants from 'expo-constants'

const supabaseUrl =
  Constants.expoConfig?.extra?.supabaseUrl ?? ''

const supabaseAnonKey =
  Constants.expoConfig?.extra?.supabaseAnonKey ?? ''

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)

export async function getSchools() {
  const { data, error } = await supabase
    .from('schools')
    .select('*')
    .order('name')

  if (error) {
    console.error('Error fetching schools:', error)
    return []
  }

  console.log(`Loaded ${data?.length ?? 0} schools`)

  return data
}