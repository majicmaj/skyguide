import { useQuery } from '@tanstack/react-query'
import useGetLocation from './useGetLocation'

export const useGetGeocoding = () => {
  const { data } = useGetLocation()
  const { lat, lon } = data || {}

  return useQuery({
    queryKey: ['geocoding', lat, lon],
    queryFn: async () => {
      if (!lat || !lon) {
        return null
      }

      // if (import.meta.env.MODE === 'development') return { ...mockData }
      const response = await fetch(
        import.meta.env.VITE_API_URL + `/geocode?lat=${lat}&lon=${lon}`,
      )
      return response.json()
    },
  })
}

export default useGetGeocoding

// const mockData = {
//   plus_code: {
//     compound_code: 'WJ9C+VJ5 Reston, VA, USA',
//     global_code: '87C4WJ9C+VJ5',
//   },
//   results: [
//     {
//       address_components: [
//         {
//           long_name: '2748',
//           short_name: '2748',
//           types: ['street_number'],
//         },
//         {
//           long_name: 'Viking Drive',
//           short_name: 'Viking Dr',
//           types: ['route'],
//         },
//         {
//           long_name: 'Herndon',
//           short_name: 'Herndon',
//           types: ['locality', 'political'],
//         },
//         {
//           long_name: 'Hunter Mill District',
//           short_name: 'Hunter Mill District',
//           types: ['administrative_area_level_3', 'political'],
//         },
//         {
//           long_name: 'Fairfax County',
//           short_name: 'Fairfax County',
//           types: ['administrative_area_level_2', 'political'],
//         },
//         {
//           long_name: 'Virginia',
//           short_name: 'VA',
//           types: ['administrative_area_level_1', 'political'],
//         },
//         {
//           long_name: 'United States',
//           short_name: 'US',
//           types: ['country', 'political'],
//         },
//         {
//           long_name: '20171',
//           short_name: '20171',
//           types: ['postal_code'],
//         },
//         {
//           long_name: '2411',
//           short_name: '2411',
//           types: ['postal_code_suffix'],
//         },
//       ],
//       formatted_address: '2748 Viking Dr, Herndon, VA 20171, USA',
//       geometry: {
//         bounds: {
//           northeast: {
//             lat: 38.9196624,
//             lng: -77.3783788,
//           },
//           southwest: {
//             lat: 38.919549,
//             lng: -77.3785632,
//           },
//         },
//         location: {
//           lat: 38.9196057,
//           lng: -77.37847099999999,
//         },
//         location_type: 'ROOFTOP',
//         viewport: {
//           northeast: {
//             lat: 38.92095468029149,
//             lng: -77.3771220197085,
//           },
//           southwest: {
//             lat: 38.91825671970849,
//             lng: -77.37981998029151,
//           },
//         },
//       },
//       place_id: 'ChIJIyc9CipGtokRn5GGSxi8HwM',
//       types: ['premise'],
//     },
//     {
//       address_components: [
//         {
//           long_name: 'Viking & Reigh St',
//           short_name: 'Viking & Reigh St',
//           types: ['establishment', 'point_of_interest', 'transit_station'],
//         },
//         {
//           long_name: 'Hunter Mill District',
//           short_name: 'Hunter Mill District',
//           types: ['administrative_area_level_3', 'political'],
//         },
//         {
//           long_name: 'Fairfax County',
//           short_name: 'Fairfax County',
//           types: ['administrative_area_level_2', 'political'],
//         },
//         {
//           long_name: 'Virginia',
//           short_name: 'VA',
//           types: ['administrative_area_level_1', 'political'],
//         },
//         {
//           long_name: 'United States',
//           short_name: 'US',
//           types: ['country', 'political'],
//         },
//         {
//           long_name: '20171',
//           short_name: '20171',
//           types: ['postal_code'],
//         },
//       ],
//       formatted_address:
//         'Viking & Reigh St, Hunter Mill District, VA 20171, USA',
//       geometry: {
//         location: {
//           lat: 38.919885,
//           lng: -77.378948,
//         },
//         location_type: 'GEOMETRIC_CENTER',
//         viewport: {
//           northeast: {
//             lat: 38.9212339802915,
//             lng: -77.3775990197085,
//           },
//           southwest: {
//             lat: 38.9185360197085,
//             lng: -77.3802969802915,
//           },
//         },
//       },
//       place_id: 'ChIJdZolDSpGtokRgRTD_wPKGVw',
//       plus_code: {
//         compound_code: 'WJ9C+XC Reston, VA, USA',
//         global_code: '87C4WJ9C+XC',
//       },
//       types: ['establishment', 'point_of_interest', 'transit_station'],
//     },
//     {
//       address_components: [
//         {
//           long_name: '2747',
//           short_name: '2747',
//           types: ['street_number'],
//         },
//         {
//           long_name: 'Viking Drive',
//           short_name: 'Viking Dr',
//           types: ['route'],
//         },
//         {
//           long_name: 'Herndon',
//           short_name: 'Herndon',
//           types: ['locality', 'political'],
//         },
//         {
//           long_name: 'Hunter Mill District',
//           short_name: 'Hunter Mill District',
//           types: ['administrative_area_level_3', 'political'],
//         },
//         {
//           long_name: 'Fairfax County',
//           short_name: 'Fairfax County',
//           types: ['administrative_area_level_2', 'political'],
//         },
//         {
//           long_name: 'Virginia',
//           short_name: 'VA',
//           types: ['administrative_area_level_1', 'political'],
//         },
//         {
//           long_name: 'United States',
//           short_name: 'US',
//           types: ['country', 'political'],
//         },
//         {
//           long_name: '20171',
//           short_name: '20171',
//           types: ['postal_code'],
//         },
//         {
//           long_name: '2408',
//           short_name: '2408',
//           types: ['postal_code_suffix'],
//         },
//       ],
//       formatted_address: '2747 Viking Dr, Herndon, VA 20171, USA',
//       geometry: {
//         location: {
//           lat: 38.9198818,
//           lng: -77.37847,
//         },
//         location_type: 'RANGE_INTERPOLATED',
//         viewport: {
//           northeast: {
//             lat: 38.92123078029149,
//             lng: -77.37712101970848,
//           },
//           southwest: {
//             lat: 38.9185328197085,
//             lng: -77.37981898029149,
//           },
//         },
//       },
//       place_id:
//         'EiYyNzQ3IFZpa2luZyBEciwgSGVybmRvbiwgVkEgMjAxNzEsIFVTQSIbEhkKFAoSCcc3QOCBSLaJEQgGPZeerty3ELsV',
//       types: ['street_address'],
//     },
//     {
//       address_components: [
//         {
//           long_name: 'WJ9C+VJ',
//           short_name: 'WJ9C+VJ',
//           types: ['plus_code'],
//         },
//         {
//           long_name: 'Reston',
//           short_name: 'Reston',
//           types: ['locality', 'political'],
//         },
//         {
//           long_name: 'Hunter Mill District',
//           short_name: 'Hunter Mill District',
//           types: ['administrative_area_level_3', 'political'],
//         },
//         {
//           long_name: 'Fairfax County',
//           short_name: 'Fairfax County',
//           types: ['administrative_area_level_2', 'political'],
//         },
//         {
//           long_name: 'Virginia',
//           short_name: 'VA',
//           types: ['administrative_area_level_1', 'political'],
//         },
//         {
//           long_name: 'United States',
//           short_name: 'US',
//           types: ['country', 'political'],
//         },
//       ],
//       formatted_address: 'WJ9C+VJ Reston, VA, USA',
//       geometry: {
//         bounds: {
//           northeast: {
//             lat: 38.91975,
//             lng: -77.37837499999999,
//           },
//           southwest: {
//             lat: 38.919625,
//             lng: -77.3785,
//           },
//         },
//         location: {
//           lat: 38.9196485,
//           lng: -77.3783838,
//         },
//         location_type: 'GEOMETRIC_CENTER',
//         viewport: {
//           northeast: {
//             lat: 38.92103648029149,
//             lng: -77.3770885197085,
//           },
//           southwest: {
//             lat: 38.9183385197085,
//             lng: -77.3797864802915,
//           },
//         },
//       },
//       place_id: 'GhIJYajDCrd1Q0ARhJWvcDdYU8A',
//       plus_code: {
//         compound_code: 'WJ9C+VJ Reston, VA, USA',
//         global_code: '87C4WJ9C+VJ',
//       },
//       types: ['plus_code'],
//     },
//     {
//       address_components: [
//         {
//           long_name: '2753-2741',
//           short_name: '2753-2741',
//           types: ['street_number'],
//         },
//         {
//           long_name: 'Viking Drive',
//           short_name: 'Viking Dr',
//           types: ['route'],
//         },
//         {
//           long_name: 'Herndon',
//           short_name: 'Herndon',
//           types: ['locality', 'political'],
//         },
//         {
//           long_name: 'Hunter Mill District',
//           short_name: 'Hunter Mill District',
//           types: ['administrative_area_level_3', 'political'],
//         },
//         {
//           long_name: 'Fairfax County',
//           short_name: 'Fairfax County',
//           types: ['administrative_area_level_2', 'political'],
//         },
//         {
//           long_name: 'Virginia',
//           short_name: 'VA',
//           types: ['administrative_area_level_1', 'political'],
//         },
//         {
//           long_name: 'United States',
//           short_name: 'US',
//           types: ['country', 'political'],
//         },
//         {
//           long_name: '20171',
//           short_name: '20171',
//           types: ['postal_code'],
//         },
//         {
//           long_name: '2408',
//           short_name: '2408',
//           types: ['postal_code_suffix'],
//         },
//       ],
//       formatted_address: '2753-2741 Viking Dr, Herndon, VA 20171, USA',
//       geometry: {
//         bounds: {
//           northeast: {
//             lat: 38.9198827,
//             lng: -77.37756619999999,
//           },
//           southwest: {
//             lat: 38.9196813,
//             lng: -77.3789925,
//           },
//         },
//         location: {
//           lat: 38.9198738,
//           lng: -77.37825819999999,
//         },
//         location_type: 'GEOMETRIC_CENTER',
//         viewport: {
//           northeast: {
//             lat: 38.9211309802915,
//             lng: -77.37693036970849,
//           },
//           southwest: {
//             lat: 38.9184330197085,
//             lng: -77.3796283302915,
//           },
//         },
//       },
//       place_id: 'ChIJxzdA4IFItokRCAY9l56u3Lc',
//       types: ['route'],
//     },
//     {
//       address_components: [
//         {
//           long_name: '20171',
//           short_name: '20171',
//           types: ['postal_code'],
//         },
//         {
//           long_name: 'Oak Hill',
//           short_name: 'Oak Hill',
//           types: ['locality', 'political'],
//         },
//         {
//           long_name: 'Fairfax County',
//           short_name: 'Fairfax County',
//           types: ['administrative_area_level_2', 'political'],
//         },
//         {
//           long_name: 'Virginia',
//           short_name: 'VA',
//           types: ['administrative_area_level_1', 'political'],
//         },
//         {
//           long_name: 'United States',
//           short_name: 'US',
//           types: ['country', 'political'],
//         },
//       ],
//       formatted_address: 'Oak Hill, VA 20171, USA',
//       geometry: {
//         bounds: {
//           northeast: {
//             lat: 38.9623328,
//             lng: -77.352999,
//           },
//           southwest: {
//             lat: 38.8844189,
//             lng: -77.4360591,
//           },
//         },
//         location: {
//           lat: 38.91469720000001,
//           lng: -77.3898602,
//         },
//         location_type: 'APPROXIMATE',
//         viewport: {
//           northeast: {
//             lat: 38.9623328,
//             lng: -77.352999,
//           },
//           southwest: {
//             lat: 38.8844189,
//             lng: -77.4360591,
//           },
//         },
//       },
//       place_id: 'ChIJBx0MODVGtokRW4eulzUuZhk',
//       postcode_localities: ['Herndon', 'Oak Hill'],
//       types: ['postal_code'],
//     },
//     {
//       address_components: [
//         {
//           long_name: 'Hunter Mill District',
//           short_name: 'Hunter Mill District',
//           types: ['administrative_area_level_3', 'political'],
//         },
//         {
//           long_name: 'Fairfax County',
//           short_name: 'Fairfax County',
//           types: ['administrative_area_level_2', 'political'],
//         },
//         {
//           long_name: 'Virginia',
//           short_name: 'VA',
//           types: ['administrative_area_level_1', 'political'],
//         },
//         {
//           long_name: 'United States',
//           short_name: 'US',
//           types: ['country', 'political'],
//         },
//       ],
//       formatted_address: 'Hunter Mill District, VA, USA',
//       geometry: {
//         bounds: {
//           northeast: {
//             lat: 39.0029229,
//             lng: -77.2315358,
//           },
//           southwest: {
//             lat: 38.8784939,
//             lng: -77.432205,
//           },
//         },
//         location: {
//           lat: 38.9482588,
//           lng: -77.32103049999999,
//         },
//         location_type: 'APPROXIMATE',
//         viewport: {
//           northeast: {
//             lat: 39.0029229,
//             lng: -77.2315358,
//           },
//           southwest: {
//             lat: 38.8784939,
//             lng: -77.432205,
//           },
//         },
//       },
//       place_id: 'ChIJaYCRosFJtokRu4BK6LKGSik',
//       types: ['administrative_area_level_3', 'political'],
//     },
//     {
//       address_components: [
//         {
//           long_name: 'Fairfax County',
//           short_name: 'Fairfax County',
//           types: ['administrative_area_level_2', 'political'],
//         },
//         {
//           long_name: 'Virginia',
//           short_name: 'VA',
//           types: ['administrative_area_level_1', 'political'],
//         },
//         {
//           long_name: 'United States',
//           short_name: 'US',
//           types: ['country', 'political'],
//         },
//       ],
//       formatted_address: 'Fairfax County, VA, USA',
//       geometry: {
//         bounds: {
//           northeast: {
//             lat: 39.057678,
//             lng: -77.0413621,
//           },
//           southwest: {
//             lat: 38.60457,
//             lng: -77.537026,
//           },
//         },
//         location: {
//           lat: 38.74389439999999,
//           lng: -77.2405153,
//         },
//         location_type: 'APPROXIMATE',
//         viewport: {
//           northeast: {
//             lat: 39.057678,
//             lng: -77.0413621,
//           },
//           southwest: {
//             lat: 38.60457,
//             lng: -77.537026,
//           },
//         },
//       },
//       place_id: 'ChIJ0wxG_rFgtokRmRY44U76C30',
//       types: ['administrative_area_level_2', 'political'],
//     },
//     {
//       address_components: [
//         {
//           long_name: 'Virginia',
//           short_name: 'VA',
//           types: ['administrative_area_level_1', 'political'],
//         },
//         {
//           long_name: 'United States',
//           short_name: 'US',
//           types: ['country', 'political'],
//         },
//       ],
//       formatted_address: 'Virginia, USA',
//       geometry: {
//         bounds: {
//           northeast: {
//             lat: 39.466012,
//             lng: -75.16643499999999,
//           },
//           southwest: {
//             lat: 36.5408519,
//             lng: -83.6753951,
//           },
//         },
//         location: {
//           lat: 37.4315734,
//           lng: -78.6568942,
//         },
//         location_type: 'APPROXIMATE',
//         viewport: {
//           northeast: {
//             lat: 39.466012,
//             lng: -75.16643499999999,
//           },
//           southwest: {
//             lat: 36.5408519,
//             lng: -83.6753951,
//           },
//         },
//       },
//       place_id: 'ChIJzbK8vXDWTIgRlaZGt0lBTsA',
//       types: ['administrative_area_level_1', 'political'],
//     },
//     {
//       address_components: [
//         {
//           long_name: 'United States',
//           short_name: 'US',
//           types: ['country', 'political'],
//         },
//       ],
//       formatted_address: 'United States',
//       geometry: {
//         bounds: {
//           northeast: {
//             lat: 74.071038,
//             lng: -66.885417,
//           },
//           southwest: {
//             lat: 18.7763,
//             lng: 166.9999999,
//           },
//         },
//         location: {
//           lat: 38.7945952,
//           lng: -106.5348379,
//         },
//         location_type: 'APPROXIMATE',
//         viewport: {
//           northeast: {
//             lat: 74.071038,
//             lng: -66.885417,
//           },
//           southwest: {
//             lat: 18.7763,
//             lng: 166.9999999,
//           },
//         },
//       },
//       place_id: 'ChIJCzYy5IS16lQRQrfeQ5K5Oxw',
//       types: ['country', 'political'],
//     },
//   ],
//   status: 'OK',
// }
