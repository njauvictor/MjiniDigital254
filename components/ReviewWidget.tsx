import GoogleReviewsWidget from 'google-reviews-widget';


export default function ReviewWidget() {
  return (
    <div className="review-widget">
      <h2>Review Widget</h2>
      <GoogleReviewsWidget instanceId="your-instance-id" />
    </div>
  )
}