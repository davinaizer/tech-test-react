export function getEstablishmentRatings(pageNum = 1) {
  return fetch(
    `http://api.ratings.food.gov.uk/Establishments/basic/${pageNum}/10`,
    { headers: { 'x-api-version': '2' } }
  ).then(res => res.json());
}
