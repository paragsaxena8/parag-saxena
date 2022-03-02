fetch(
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@paragXd"
)
  .then((res) => res.json())
  .then((data) => {
    const res = data.items; //This is an array with the content. No feed, no info about author etc..
    const posts = res.filter((item) => item.categories.length > 0);

    // Put things in right spots of markup
    let output = "";
    posts.forEach((item) => {
      output += `
            <div class="col-lg-4 col-md-6 col-sm-6">
         <div class="blog-item">
								<a href= "${item.guid}"
								target = "_blank"
								rel = "noopener noreferrer">
									<div class="blog-img">
										<img class="img-fluid blog-img-style" src="${item.thumbnail}" alt="blog_thumbnail">
									</div>
									<div class="blog-info">
										<div class="tags">
											<span>#${item.categories[0]}</span>
											<span>#${item.categories[1]}</span>
										</div>
										<h4 class="blog-title">
											<span>${item.title}</span>
                                        </h4>
									</div>
								</a>
                            </div>
                            	</div>
                            `;
    });
    document.querySelector("#blog").innerHTML = output;
  });
