import {
  Field,
  PrimaryKey,
  TigrisCollection,
  TigrisDataTypes,
} from "@tigrisdata/core";

// TigrisCollection 데코레이터로 'records'라는 이름의 Tigris 컬렉션을 정의
@TigrisCollection("records")
export class Record {
  // PrimaryKey 데코레이터로 TigrisDataTypes.BYTE_STRING 타입의 '_id' 필드를 주요 키(primary key)로 정의
  // order: 1은 정렬 순서, autoGenerate: true는 자동 생성 여부를 나타냄
  @PrimaryKey(TigrisDataTypes.BYTE_STRING, { order: 1, autoGenerate: true })
  _id?: string;

  // Field 데코레이터로 $k 필드를 정의
  // elements: TigrisDataTypes.STRING은 각각의 원소가 TigrisDataTypes.STRING 타입임을 나타냄
  @Field({ elements: TigrisDataTypes.STRING })
  $k?: string[];

  // Field 데코레이터로 name 필드를 정의
  @Field()
  name!: string;

  // Field 데코레이터로 position 필드를 정의
  @Field()
  position!: string;

  // Field 데코레이터로 level 필드를 정의
  @Field()
  level!: string;
}
