var news1 = new Container('news', document.body);
news1.add(
    new Item('normal').add(
        new IconNews('梅西不拿金球奖也很伟大', '#', 'video')
    )
).add(
    new Item('normal').add(
        new IconNews('两岸关系紧张', '#', 'live')
    )
).add(
    new Item('normal').add(
        new NewsGroup('has-img').add(
            new ImageNews('1.jpg', '#', 'small')
        ).add(
            new EasyNews('从240斤到型男', '#')
        ).add(
            new EasyNews('五大雷人跑步机', '#')
        )
    )
).add(
    new Item('normal').add(
        new TypeNews('AK47不愿为费城打球', '#', 'NBA', 'left')
    )
).add(
    new Item('normal').add(
        new TypeNews('火炮飚6三分创新高', '#', 'CBA', 'right')
    )
).show();
