import request from '../request'

export function getHomeGoodPriceData () {
  return request.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighScoreData () {
  return request.get({
    url: '/home/highscore'
  })
}

export function getHomeDiscount () {
  return request.get({
    url: '/home/discount'
  })
}

export function getLongForData () {
  return request.get({
    url: '/home/longfor'
  })
}