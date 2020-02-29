# nakajima

## 会社や業務で普段やっていること

webアプリケーション(Java)の改修をしています。

## 今日やること

jwt認証APIをGo言語で作ってみたものの、汚い。
そのため、コードのリファクタリングをしたいと思います。

## 相談するかもしれないこと

## 今日の成果

### 作業前

今回こちらのユーザモデルをデータベースと分離するようにしました。

```go
package model

type User struct {
	gorm.Model
	Name     string `json:"name" gorm:"size:255"`
	Email    string `json:"email" gorm:"size:255"`
	Password string `json:"password" gorm:"size:255"`
	Role     string `json:"role" gorm:"size:255"`
}

func CreateUser(db *gorm.DB, user *User) error {
	return db.Create(user).Error
}

func FindUser(db *gorm.DB, u *User) (User, error) {
	var user User
	err := db.Where(u).First(&user).Error
	return user, err
}

func UpdateUser(db *gorm.DB, uid uint, u *User) error {
	err := db.Model(&User{}).Where("ID = ?", uid).Update(u).Error
	return err
}
```

### 成果

* インターフェースの定義

```go
package repository

type UserRepository interface {
	Find(*model.User) (*model.User, error)
	Create(*model.User) (*model.User, error)
	Update(*model.User) (*model.User, error)
}
```
* データベースが切り替えれるように修正

```go
type UserRepository struct {
	SqlHandler
}

// データベースの切り離し
type SqlHandler struct {
	Conn *gorm.DB
}

// インターフェースの継承
func NewUserRepository(sqlHandler SqlHandler) repository.UserRepository {
	userRepository := UserRepository{sqlHandler}
	return &userRepository
}

func (userRepo *UserRepository) Find(u *model.User) (*model.User, error) {
	...
}

func (userRepo *UserRepository) Create(user *model.User) (*model.User, error) {
	...
}

func (userRepo *UserRepository) Update(user *model.User) (*model.User, error) {
  ...
}
```

### 反省

* 調べる時間の比重が多くなってしまった