/*
MongoDB
대표적인 NoSQL 도큐먼트 데이터베이스입니다. 도큐먼트 데이터베이스는 데이터를 테이블이 아닌 문서처럼 저장하는 데이터베이스를 의미합니다. 
도큐먼트 데이터베이스에서는 JSON 유사 형식으로 데이터를 문서화하는 것이 보통입니다. 각각의 도큐먼트는 데이터를 필드 - 값의 형태로 가지고 있고, 
컬렉션이라고 하는 그룹으로 묶어서 관리합니다.

NoSQL Database?
MongoDB는 NoSQL 데이터베이스입니다. NoSQL은 매우 넓은 범위에서 사용하는 용어로 관계형 테이블의 레거시한 방법을 사용하지 않는 데이터 저장소를 뜻합니다.
즉, NoSQL 데이터베이스에선 데이터를 행과 열이 아닌 체계적인 방식으로 저장합니다. NoSQL 데이터베이스의 예는 도서카드 목록함에서 MongoDB와 같은 보다 정교한 데이터 저장소에 이르기까지 다양한 개념을 뜻합니다. 따라서 NoSQL이 의미하는 데이터베이스의 범위가 너무 넓기 때문에, 정의를 좀 더 좁혀보겠습니다.

MongoDB는 NoSQL 도큐먼트 데이터베이스입니다. MongoDB에서 데이터는 도큐먼트의 형태로 저장됩니다.
도큐먼트들은 컬렉션이라고 부르는 곳에 저장되며 이것이 MongoDB가 NoSQL 도큐먼트 데이터베이스로 분류되는 이유입니다.

따라서, 정리하자면 MongoDB 데이터베이스는 NoSQL 도큐먼트 데이터베이스입니다.
다음 장에서 도큐먼트가 무엇인지 자세히 다루겠습니다.

NoSQL 기반의 비관계형 데이터베이스는 다음과 같은 경우에 많이 사용합니다.
1. 데이터의 구조가 거의 또는 전혀 없는 대용량의 데이터를 저장하는 경우

NoSQL 데이터베이스는 관계에 대해 중점을 둔 SQL 데이터베이스에 비해 보다 자유로운 형태로 데이터를 저장할 수 있습니다. 그렇기 때문에 필요에 따라서 데이터의 새 유형을 추가할 수 있습니다. 따라서 소프트웨어 개발에 정형화 되지 않은 많은 양의 데이터가 필요한 경우, NoSQL을 적용하는 것이 효율적일 수 있습니다.

2. 클라우드 컴퓨팅 및 저장공간을 최대한 활용하는 경우

NoSQL 데이터베이스는 저장 공간의 효율적인 사용을 위한 방법으로 데이터베이스를 클라우드 기반으로 쉽게 분리 할 수 있도록 지원하고 있습니다. SQL 데이터베이스에서는보통 시스템이 커져가면서 DB를 증설해야 하는 시점이 오면 수직적 확장의 형태로 DB를 증설하기에 관리가 어려워질 수 있는데 NoSQL의 경우 수평적 확장의 형태로 증설을 하기에 숫자는 무한대로, 서버를 계속 분산시켜 DB를 증설할 수 있습니다.

3. 빠르게 서비스를 구축하고 데이터 구조를 자주 업데이트 하는 경우

NoSQL 데이터베이스의 경우 스키마를 미리 준비할 필요가 없기 때문에 빠르게 개발하는 과정에 매우 유용합니다. 시장에 빠르게 프로토타입을 출시해야 하는 경우, 소프트웨어 버전별로 많은 다운타임(데이터베이스 서버 오프라인) 없이 데이터 구조를 자주 업데이트 해야하는 경우, 일일이 스키마를 수정해주어야 하는 관계형 데이터베이스 보다는 NoSQL 기반의 비관계형 데이터베이스가 더 효율적입니다.

Atlas Cloud
MongoDB에서는 아틀라스(Atlas)를 사용하여 클라우드에서 데이터베이스를 설정합니다.
이는 GUI 및 Shell로 데이터를 시각화, 분석, 내보내기 및 빌드하는 데 사용할 수 있습니다. 아틀라스 사용자는 클러스터를 배포 할 수 있으며 이는 그룹화된 서버에 데이터를 저장합니다.

이러한 서버는 레플리카 세트(Replica set)으로 구성되어 있으며 이는 동일한 데이터를 저장하는 몇 개의 연결된 MongoDB 인스턴스의 모음입니다. 여기서, 인스턴스는 특정 소프트웨어를 실행하는 로컬 또는 클라우드의 단일 머신이고, 이 경우 인스턴스는 클라우드에서 실행되는 MongoDB 데이터베이스입니다.

도큐먼트나 컬렉션을 변경할 경우, 해당 데이터의 중복 사본이 레플리카 세트에 저장됩니다.
이 설정을 통해 레플리카 세트의 인스턴스 중 하나에 문제가 발생하더라도 데이터는 그대로 유지되며 레플리카 세트의 애플리케이션에서 나머지 작업을 할 수 있습니다.
이 과정을 위해 클러스터(서버 그룹)를 배포하면 자동으로 레플리카 세트가 구성됩니다.

용어 정리
도큐먼트(Document)

필드 - 값 쌍으로 저장된 데이터

필드(Field)

데이터포인트를 위한 고유한 식별자

값(Value)

주어진 식별자와 관계된 데이터

컬렉션(Collection)

MongoDB의 도큐먼트로 구성된 저장소로 일반적으로 도큐먼트 간의 공통 필드가 있습니다. 데이터베이스 당 많은 컬렉션이 있고 컬렉션 당 많은 도큐먼트가 있을 수 있습니다.

JSON vs BSON
BSON은(Binary JSON) 컴퓨터의 언어에 가까운 이진법에 기반을 둔 표현법이기 때문에 JSON 보다 메모리 사용에 효율적이며, 보다 빠르고, 가벼우며 유연합니다.
뿐만 아니라 BSON의 사용으로 더 많은 데이터 타입을 사용할 수 있게 되었습니다.

따라서 MongoDB는 JSON형식으로 작성된 것은 무엇이든 데이터베이스에 추가할 수 있고, 쉽게 조회할 수 있지만,
속도, 효율성, 유연성의 장점이 있기 때문에 내부적으로 BSON 형식으로 데이터를 저장, 사용하고 있습니다.



*/
