책 623페이지(1쇄 기준)에서 'AWS서버에서 letsencrypt 인증서 받아오기'라는 내용에 오류가 발견되어 정정합니다.

책에서는 letsencrypt 인증서를 받아오는 **명령어**를 아래와 같이 안내하고 있습니다.

```
 curl -L https://raw.githubusercontent.com/wmnnd/nginx-certbot/main/init-letsencrypt.sh > init-letsencrypt.sh
```

그런데 여기 /main/ 부분이 /master/로 변경되어야 합니다. 따라서 아래와 같이 입력하셔야 합니다.

```
 curl -L https://raw.githubusercontent.com/wmnnd/nginx-certbot/master/init-letsencrypt.sh > init-letsencrypt.sh
```

이런 문제가 발생한 이유는 저희가 집필하는 과정에서 있었던 "Black Lives Matter" 운동 때문입니다. 
사회 전반에서 인종차별적 요소가 있는 용어를 개선하자는 캠페인이 있었죠. IT 분야도 예외가 아니었습니다. 많은 Github 저장소들이 master 브랜치를 main으로 바꾸는 운동에 참여했습니다.

저희가 쓴 책은 다른 사람들이 만들어놓은 내용을 많이 활용하는데, 집필 과정에서 이 중 몇몇 요소들이 이 운동에 참여하여 `master`에서 `main`으로 변경이 되었음을 확인했습니다. 
이 요소들을 최종 교정할 때 정정하는 과정에서 변경되지 않아야 할 letsencrypt까지 변경되어 버렸습니다.

추후, letsencrypt에서도 master 브랜치를 main으로 바꾸는 운동에 참여한다면, 저희 책이 오류는 더 이상 오류가 아니게 되겠지만, 당분간 그럴일은 없을테니, 여기에 정정글을 올립니다.