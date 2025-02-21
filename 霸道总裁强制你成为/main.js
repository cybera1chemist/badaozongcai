let refuseCount = 0;

const refused_messags = [
    "你是在欲擒故纵了吗？那我就陪你玩到底。",
    "呵，你是第一个敢这么跟我说话的人。",
    "你是故意在用这种伎俩吸引我的注意吗？",
    "你早晚都会是我的。",
    "该死，你拒绝我的样子都这般甜美。",
    "就算你跑到天涯海角，我也会把你抓回来的。",
    "你知道惹怒我的后果是什么吗？",
    "我说你是我媳妇，你就是我媳妇。",
    "不要试图挑战我的底线。",
    "傻瓜，我怎么会生你的气呢。",
    "如果你想激怒我，那么你成功了。",
    "该死，你难到不知道我喜欢你吗？",
    "你可真是个磨人的小妖精，我该那你怎么办？",
    "总有一天我会让你的名字出现在我家的户口本上。",
    "全天下所有最好的东西都该属于我，包括你在内。",
    "我还从来没有尝试过被拒绝的滋味呢。"
];

document.addEventListener('DOMContentLoader', () => {
    document.getElementById('yes-btn').addEventListener('click', accept);
    document.getElementById('no-btn').addEventListener('click', refuse);

    document.addEventListener("contextmenu", e => e.preventDefault());
    document.addEventListener("keydown", e=> {
        if([27,116,123].includes(e.keyCode)) e.preventDefault()
    });

});

function accept() {
    alert();
    document.getElementById("trap-box").remove();
}

function refuse(){
    refuseCount++;
    const box = document.getElementById("trap-box");
    const noBtn = document.getElementById("no-btn");

    document.getElementById("message").textContent = 
    refused_messags[Math.ceil(Math.random()*refused_messags.length)];
}